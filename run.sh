echo "Running DupeFinder"
cd react-frontend
npm run build
cd ..
cd flask-backend
python main.py
cd ..